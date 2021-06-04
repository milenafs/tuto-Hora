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
    public class ClienteProfHorarioController : Controller
    {
        private readonly TutoHoraContext _context;
        public ClienteProfHorarioController(TutoHoraContext context)
        {
            // construtor
            _context = context;
        }
        [HttpGet]
        public ActionResult<List<ClienteProfHorario>> GetAll() {
            return _context.ClienteProfHorario.ToList();
        }
    }
}