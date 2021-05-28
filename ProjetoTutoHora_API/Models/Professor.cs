namespace ProjetoTutoHora_API.Models
{
    public class Professor
    {
        public int idProfessor { get; set; }
        public string nome { get; set; }
        public string email { get; set; }
        public string senha { get; set; }
        public string telefone { get; set; }
        public string foto { get; set; }
        public string formacao { get; set; }
        public string metodologia { get; set; }
        public int idade { get; set; }
    }
}