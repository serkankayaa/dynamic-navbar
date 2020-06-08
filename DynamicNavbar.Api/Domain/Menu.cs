using DynamicNavbar.Api.Domain;
using System.Collections.Generic;

namespace DynamicNavbar.Api.Models
{
    public class Menu
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string ContentHeader { get; set; }
        public List<Product> Products { get; set; }
    }
}
