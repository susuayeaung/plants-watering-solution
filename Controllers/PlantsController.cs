using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace plants-watering-solution.Controllers
{
    [ApiController]
    public class PlantsController : ControllerBase
    {

        private readonly ILogger<PlantsController> _logger;

        static readonly Models.IPlantRepository repository = new Models.PlantRepository();

        public PlantsController(ILogger<PlantsController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [Route("api/plants")]
        public IEnumerable<Models.PlantModel> GetAllPlants()
        {
            return repository.GetAll();
        }

        [HttpPost]
        [Route("api/plant")]
        [Consumes("application/json")]
        public Models.PlantModel PostPlant(Models.PlantModel item)
        {
            return repository.Add(item);
        }
        
    }
}