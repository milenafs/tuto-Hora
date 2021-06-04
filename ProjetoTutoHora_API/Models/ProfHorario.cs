//id`, `idProf`, `diaSemana`, `horarioInicio`, `horarioFinal`
namespace ProjetoTutoHora_API.Models
{
    public class ProfHorario
    {
        public int Id { get; set; }
        public int idProf{get; set;}
        public int diaSemana {get; set;}      
        public string horarioInicio { get; set; }
        public string horarioFinal { get; set; }
    }
}