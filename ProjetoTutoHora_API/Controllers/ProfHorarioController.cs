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
    public class ProfHorarioController : Controller
    {
        private readonly TutoHoraContext _context;
        public ProfHorarioController(TutoHoraContext context)
        {
            // construtor
            _context = context;
        }
        [HttpGet]
        public ActionResult<List<ProfHorario>> GetAll() {
            return _context.ProfHorario.ToList();
        }
    }
}