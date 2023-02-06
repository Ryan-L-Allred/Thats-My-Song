﻿using ThatsMySong.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ThatsMySong.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HipHopSongController : ControllerBase
    {
        private IHipHopSongRepository _hipHopSongRepo;

        public HipHopSongController(IHipHopSongRepository hipHopSongRepo)
        {
            _hipHopSongRepo= hipHopSongRepo;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_hipHopSongRepo.GetAllHipHopSongs());
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var hipHopSong = _hipHopSongRepo.GetHipHopSongById(id);
            if (hipHopSong == null)
            {
                return NotFound();
            }
            return Ok(hipHopSong);
        }
    }
}
