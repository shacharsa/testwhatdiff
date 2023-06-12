using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CalcServer.Models
{
    public class Response<T>
    {
        public int ReturnCode { get; set; } // 0 - success, 9 - failure
        public T Result { get; set; }
    }
}
