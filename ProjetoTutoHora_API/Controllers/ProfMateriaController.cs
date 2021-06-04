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
    public class ProfMateriaController : Controller
    {
        private readonly TutoHoraContext _context;
        public ProfMateriaController(TutoHoraContext context)
        {
            // construtor
            _context = context;
        }
        [HttpGet]
        public ActionResult<List<ProfMateria>> GetAll() {
            return _context.ProfMateria.ToList();
        }
    }
}