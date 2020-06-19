using Sieve.Models;

namespace DynamicNavbar.Api
{
    public class SearchHelper : SieveModel
    {
        public string Filters { get; set; }
        public string Sorts { get; set; }
        public int? Page { get; set; }
        public int? PageSize { get; set; }
    }
}
