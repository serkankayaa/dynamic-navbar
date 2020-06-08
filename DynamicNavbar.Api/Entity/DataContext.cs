using DynamicNavbar.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace DynamicNavbar.Api.Entity
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> context) : base(context)
        {

        }

        public DbSet<Menu> Menu { get; set; }
    }
}
