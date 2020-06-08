using DynamicNavbar.Api.Domain;
using DynamicNavbar.Api.Entity;
using DynamicNavbar.Api.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace DynamicNavbar.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class NavbarController : ControllerBase
    {
        private DataContext _context;

        public NavbarController(DataContext context)
        {
            _context = context;
            this.CreateMenuData();
        }

        [HttpGet]
        public IEnumerable<MenuDto> Get()
        {
            var menuData = _context.Menu.Where(c => c.Id > 0).Select(c => new MenuDto
            {
                Id = c.Id,
                Name = c.Name,
                ContentHeader = c.ContentHeader,
                Products = c.Products.Select(k => new ProductDto
                {
                    Id = k.Id,
                    ProductName = k.ProductName
                }).ToList()
            }).ToList();

            return menuData;
        }

        private void CreateMenuData()
        {
            if (!_context.Menu.Any())
            {
                _context.Menu.Add(new Menu
                {
                    Id = 1,
                    Name = "Elektronik",
                    ContentHeader = "Elektronik Kategorisi",
                    Products = new List<Product>
                    {
                        new Product()
                        {
                            ProductName = "Bilgisayar"
                        },
                        new Product()
                        {
                            ProductName = "Telefon"
                        },
                        new Product()
                        {
                            ProductName = "HDD"
                        }
                    }
                });

                _context.Menu.Add(new Menu
                {
                    Id = 2,
                    Name = "Giyim",
                    ContentHeader = "Giyim Kategorisi",
                    Products = new List<Product>
                    {
                        new Product()
                        {
                            ProductName = "Ceket"
                        },
                        new Product()
                        {
                            ProductName = "Gömlek"
                        },
                        new Product()
                        {
                            ProductName = "Pantolon"
                        }
                    }
                });

                _context.Menu.Add(new Menu
                {
                    Id = 3,
                    Name = "Spor",
                    ContentHeader = "Spor Kategorisi",
                    Products = new List<Product>
                    {
                        new Product()
                        {
                            ProductName = "Futbol Topu"
                        },
                        new Product()
                        {
                            ProductName = "Forma"
                        },
                        new Product()
                        {
                            ProductName = "Ayakkabı"
                        }
                    }
                });

                _context.SaveChanges();
            }
        }
    }
}
