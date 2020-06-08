using System.Collections.Generic;

namespace DynamicNavbar.Api.Models
{
    public class MenuDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string ContentHeader { get; set; }
        public List<ProductDto> Products { get; set; }
    }
}
