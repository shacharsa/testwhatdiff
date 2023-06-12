using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CalcServer.IServices;
using CalcServer.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace CalcServer.Controllers
{
    [ApiController]
    [Route("api/calculator")]
    public class CalculatorController : ControllerBase
    {
        private readonly ICalculatorService _calculatorService;

        public CalculatorController(ICalculatorService calculatorService)
        {
            _calculatorService = calculatorService;
        }

        [HttpGet, Route("getMathExpressionResult")]
        public Response<decimal> Get(string expression)
        {
            if (expression == null)
            {
                return new Response<decimal>
                {
                    ReturnCode = 9
                };
            }
            Response<decimal> response = _calculatorService.GetMathExpressionResult(expression);
            return response;
        }
    }
}
