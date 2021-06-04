using Microsoft.EntityFrameworkCore;
using ProjetoTutoHora_API.Models;

namespace ProjetoTutoHora_API.Data
{
    public class TutoHoraContext : DbContext
    {
        public TutoHoraContext(DbContextOptions<TutoHoraContext> options) : base(options)
        {
        }
        public DbSet<Cliente> Cliente { get; set; }
        public DbSet<Professor> Professor { get; set; }
        public DbSet<Materia> Materia { get; set; }
        public DbSet<ProfHorario> ProfHorario { get; set; }
        public DbSet<ProfMateria> ProfMateria { get; set; }
        public DbSet<ClienteProfHorario> ClienteProfHorario { get; set; }
    }

}