using Microsoft.EntityFrameworkCore;
using ProjetoTutoHora_API.Models;

namespace ProjetoTutoHora_API.Data
{
    public class TutoHoraContext : DbContext
    {
        public TutoHoraContext(DbContextOptions<TutoHoraContext> options) : base(options)
        {
        }
        public DbSet<Clientes> Clientes { get; set; }
        public DbSet<Professor> Professor { get; set; }
    }

}