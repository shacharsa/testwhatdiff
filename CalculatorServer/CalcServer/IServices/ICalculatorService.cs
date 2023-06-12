using CalcServer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CalcServer.IServices
{
    public interface ICalculatorService
    {
        public Response<decimal> GetMathExpressionResult(string expression);
    }
}
