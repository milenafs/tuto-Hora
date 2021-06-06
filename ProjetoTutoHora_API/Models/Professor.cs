using System.ComponentModel.DataAnnotations;
namespace ProjetoTutoHora_API.Models
{
    public class Professor
    {
         public int Id { get; set; }
      
        public string nomeProf { get; set; }
          [Key] public string email { get; set; }
        public string senha { get; set; }
        public string telefone { get; set; }
        public string foto { get; set; }
        public string formação { get; set; }
        public string descricao_metodologia { get; set; }
        public int idade { get; set; }
        
    }
}