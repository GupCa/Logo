using System;
using Logo.Contracts;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Mvc;


namespace Logo.Implementation
{
    public class ApiExceptionFilter : ExceptionFilterAttribute
    {
        private ILogger<ApiExceptionFilter> _logger;

        public ApiExceptionFilter(ILogger<ApiExceptionFilter> logger)
        {
            _logger = logger;
        }

        public override void OnException(ExceptionContext context)
        {
            ApiError apiError = null;
            if (context.Exception is ApiException)
            {
                var ex = context.Exception as ApiException;
                context.Exception = null;
                apiError = new ApiError(ex.Message);                
                context.HttpContext.Response.StatusCode = ex.StatusCode;               
                _logger.LogWarning($"Application thrown error: {ex.Message}", ex);
            }

            else if (context.Exception is UnauthorizedAccessException)
            {
                apiError = new ApiError("Unauthorized Access");
                context.HttpContext.Response.StatusCode = 401;
                _logger.LogWarning("Unauthorized Access in Controller Filter.");
               
            }

            else
            {                              
                #if !DEBUG
                var msg = "An unhandled error occurred.";                
                string stack = null;
            #else
                var msg = context.Exception.GetBaseException().Message;
                string stack = context.Exception.StackTrace;
            #endif

                apiError = new ApiError(msg)
                {
                    Detail = stack
                };

                context.HttpContext.Response.StatusCode = 500;

                _logger.LogError(new EventId(0), context.Exception, msg);               
            }
            // always return a JSON result
            context.Result = new JsonResult(apiError);

            base.OnException(context);
        }
    }
}
