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
    public class ProfessorController : Controller
    {
        private readonly TutoHoraContext _context;
        public ProfessorController(TutoHoraContext context)
        {
            // construtor
            _context = context;
        }
        [HttpGet]
        public ActionResult<List<Professor>> GetAll() {
            return _context.Professor.ToList();
        }
        [HttpGet ("{ProfessorEmail}")]
        public ActionResult<List<Professor>> GetEmail(string ProfessorEmail) 
        {
            try
            {
                var result = _context.Professor.Find(ProfessorEmail);
                //console.log(ProfessorEmail);
                if (result == null)
                {
                    return NotFound();
                }
                
                return Ok(result);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "[ERROR] Falha no acesso ao banco de dados.");
            }
        }

    }
    
}