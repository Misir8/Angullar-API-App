using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AngularWithASP.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace AngularWithASP.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private readonly DataContext _context;

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger, DataContext context)
        {
            _logger = logger;
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await _context.WeatherForecasts.ToListAsync());
        }
        
        [AllowAnonymous]
        [HttpGet("{id}")]
        public IActionResult Get(int? id)
        {
            return Ok(_context.WeatherForecasts.FirstOrDefault(x => x.Id == id));
        }
    }
}