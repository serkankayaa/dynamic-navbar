using DynamicNavbar.Api.Domain;
using Sieve.Attributes;
using System.Collections.Generic;

namespace DynamicNavbar.Api.Models
{
    public class Menu
    {
        public int Id { get; set; }

        [Sieve(CanFilter = true, CanSort = true, Name = "Name")]
        public string Name { get; set; }

        [Sieve(CanFilter = true, CanSort = true, Name = "ContentHeader")]
        public string ContentHeader { get; set; }

        public List<Product> Products { get; set; }
    }
}
