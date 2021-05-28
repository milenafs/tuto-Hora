using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using ProjetoTutoHora_API.Data;
using ProjetoTutoHora_API.Models;

using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace ProjetoTutoHora_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClienteController : Controller
    {
        private readonly TutoHoraContext _context;
        public ClienteController(TutoHoraContext context)
        {
            // construtor
            _context = context;
        }
        [HttpGet]
        public ActionResult<List<Clientes>> GetAll() {
            return _context.Clientes.ToList();
        }
    }
}