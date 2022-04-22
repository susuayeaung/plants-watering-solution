using Microsoft.AspNetCore.Mvc;

namespace plants_watering_solution.Controllers;

[ApiController]
[Route("[controller]")]
public class WeatherForecastController : ControllerBase
{
    private static readonly string[] Summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

    private readonly ILogger<WeatherForecastController> _logger;

    public WeatherForecastController(ILogger<WeatherForecastController> logger)
    {
        _logger = logger;
    }

    [HttpGet(Name = "GetWeatherForecast")]
    public IEnumerable<WeatherForecast> Get()
    {
        return Enumerable.Range(1, 5).Select(index => new WeatherForecast
        {
            Date = DateTime.Now.AddDays(index),
            TemperatureC = Random.Shared.Next(-20, 55),
            Summary = Summaries[Random.Shared.Next(Summaries.Length)]
        })
        .ToArray();
    }
}

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
