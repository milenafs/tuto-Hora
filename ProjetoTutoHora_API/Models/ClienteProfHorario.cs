//`id`, `idCliente`, `idProfHorario`, `dataAula`, `link`, `descrição`
namespace ProjetoTutoHora_API.Models
{
    public class ClienteProfHorario
    {
        public int Id { get; set; }
        public int idCliente{get; set;}
        public int idProfHorario {get; set;}     
        public string dataAula { get; set; }
        public string link { get; set; }
        public string descrição { get; set; }
    }
}