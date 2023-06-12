using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CalcServer.Models
{
    public class OperationNode
    {
        public decimal NumericValue { get; set; }
        public string Operator { get; set; }
    }
}
