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
        public ActionResult<List<Cliente>> GetAll() {
            return _context.Cliente.ToList();
        }
        [HttpGet ("{ClienteEmail}")]
        public ActionResult<List<Cliente>> GetEmail(string ClienteEmail) 
        {
            try
            {
                var result = _context.Cliente.Find(ClienteEmail);
                //console.log(ClienteEmail);
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