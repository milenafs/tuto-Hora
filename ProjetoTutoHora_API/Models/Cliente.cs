using System.ComponentModel.DataAnnotations;
namespace ProjetoTutoHora_API.Models
{
    public class Cliente
    {
        //public int id { get; set; }
        
        public string nome { get; set; }
        [Key] public string email { get; set; }
        public string senha { get; set; }
        public string telefone { get; set; }
        public string foto { get; set; }
    }
}