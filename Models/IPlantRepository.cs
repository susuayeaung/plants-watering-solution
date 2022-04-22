using System;
using System.Collections.Generic;

namespace plants-watering-solution.Models
{
    public interface IPlantRepository
    {
        IEnumerable<PlantModel> GetAll();
        
        PlantModel Add(PlantModel plant);
    }
}