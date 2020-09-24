using AngularWithASP.Models;
using Microsoft.EntityFrameworkCore;

namespace AngularWithASP.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) {}
        public DbSet<User> Users { get; set; }
        public DbSet<Photo> Photos { get; set; }
    }
}
