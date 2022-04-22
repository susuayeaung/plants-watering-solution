using System;
using System.Collections.Generic;

namespace plants-watering-solution.Models
{
    public class PlantRepository: IPlantRepository
    {
        private List<PlantModel> plants = new List<PlantModel>();
        private int _nextId = 1;

        public PlantRepository()
        {
            Add(new PlantModel { plantName= "Ficus", wateringStatus="Off"});
            Add(new PlantModel { plantName= "Peace Lily", wateringStatus="Off"});
            Add(new PlantModel { plantName= "Dracaena Cintho", wateringStatus="Off"});
            Add(new PlantModel { plantName= "Golden Pothos", wateringStatus="Off"});
            Add(new PlantModel { plantName= "Yucca", wateringStatus="Off"});
        }

        public IEnumerable<PlantModel> GetAll()
        {
            return plants;
        }

        public PlantModel Add(PlantModel item)
        {
            if (item == null)
            {
                throw new ArgumentNullException("item");
            }
            item.Id = _nextId++;
            plants.Add(item);
            return item;
        }
    }
}