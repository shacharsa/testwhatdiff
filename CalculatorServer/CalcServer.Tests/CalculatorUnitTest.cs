using Xunit;
using CalcServer.IServices;
using CalcServer.Models;
using Shouldly;

namespace CalcServer.Tests
{
    public class CalculatorUnitTest
    {
        [Fact]
        public void GetMathExpressionResult_Should_Return_5555()
        {
            ICalculatorService calculatorService = new CalculatorService();
            Response<decimal> response = calculatorService.GetMathExpressionResult("1234+4321");
            response.ShouldSatisfyAllConditions(
                () => response.Result.ShouldBe(5555),
                () => response.ReturnCode.ShouldBe(0));
        }

        [Fact]
        public void GetMathExpressionResult_Should_Return_Rc_9_When_Divided_By_Zero()
        {
            ICalculatorService calculatorService = new CalculatorService();
            Response<decimal> response = calculatorService.GetMathExpressionResult("2/0");
            response.ReturnCode.ShouldBe(9);
        }

        [Fact]
        public void GetMathExpressionResult_Should_Return_880()
        {
            ICalculatorService calculatorService = new CalculatorService();
            Response<decimal> response = calculatorService.GetMathExpressionResult("500-1*20+400");
            response.ShouldSatisfyAllConditions(
               () => response.Result.ShouldBe(880),
               () => response.ReturnCode.ShouldBe(0));
        }

        [Fact]
        public void GetMathExpressionResult_Should_Return_Double_Result()
        {
            ICalculatorService calculatorService = new CalculatorService();
            Response<decimal> response = calculatorService.GetMathExpressionResult("3.5+12.3");
            Assert.Equal(15.8, (double)response.Result);
        }
    }
}
