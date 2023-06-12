using CalcServer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CalcServer.IServices
{
    public class CalculatorService : ICalculatorService
    {
        public CalculatorService() { }
        public Response<decimal> GetMathExpressionResult(string expression)
        {
            try
            {
                LinkedList<OperationNode> list = ConvertStringToList(expression);
                decimal result = CalculateListValue(list);
                return new Response<decimal>
                {
                    ReturnCode = 0,
                    Result = Math.Round(result, 3)
                };
            }
            catch
            {
                return new Response<decimal>
                {
                    ReturnCode = 9
                };
            }
        }

        private decimal CalculateListValue(LinkedList<OperationNode> list)
        {
            LinkedListNode<OperationNode> current = list.First;
            LinkedListNode<OperationNode> next = list.First.Next;
            decimal result;
            while (current != null)
            {
                if ((current.Value.Operator == "*") || (current.Value.Operator == "/"))
                {
                    CalculateActionAndRemoveNode(current.Value.Operator, next, current, list);
                }

                else
                {
                    current = current.Next;
                }
                next = current?.Next;
            }
            result = SumListNodes(list);
            return result;

        }

        private void CalculateActionAndRemoveNode(string action, LinkedListNode<OperationNode> next, LinkedListNode<OperationNode> current, LinkedList<OperationNode> list)
        {
            if (next != null)
            {
                current.Value.NumericValue = action == "*" ? current.Value.NumericValue * next.Value.NumericValue : current.Value.NumericValue / next.Value.NumericValue;
                current.Value.Operator = next.Value.Operator;
                list.Remove(next);
            }
            else
            {
                list.Remove(current);
            }
        }

        private decimal SumListNodes(LinkedList<OperationNode> list)
        {
            LinkedListNode<OperationNode> current = list.First;
            LinkedListNode<OperationNode> next = list.First.Next;
            decimal result = current.Value.NumericValue;
            while (current != null && current.Value.Operator != "")
            {
                if (current.Value.Operator == "+")
                {
                    result += next.Value.NumericValue;
                }
                else
                {
                    result -= next.Value.NumericValue;
                }
                current = current.Next;
                next = current.Next;
            }
            return result;
        }

        private LinkedList<OperationNode> ConvertStringToList(string expression)
        {
            LinkedList<OperationNode> list = new LinkedList<OperationNode>();
            while (expression != "")
            {
                string value = "";
                string valueOperator = "";
                decimal num;
                int index = 0;
                while (expression.Length > index && expression[index] != '+' && expression[index] != '-' && expression[index] != '*' && expression[index] != '/')
                {
                    value += expression[index];
                    index++;
                }
                valueOperator = expression.Length > index ? expression[index].ToString() : "";
                bool isParseSucceded = decimal.TryParse(value, out num);
                if (isParseSucceded)
                {
                    list.AddLast(new OperationNode { NumericValue = num, Operator = valueOperator });
                }
                if (expression.Contains('+') || expression.Contains('-') || expression.Contains('*') || expression.Contains('/'))
                {
                    expression = expression.Remove(0, value.Length + 1);
                }
                else
                {
                    expression = "";
                }

            }

            return list;
        }
    }
}
