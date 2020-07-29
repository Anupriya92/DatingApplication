using System.Linq;
using AutoMapper;
using DatingApp.API.Dtos;
using DatingApp.API.Models;

namespace DatingApp.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
         //CreateMap<User, UserForListDto>();
         // CreateMap<User, UserForDetailedDto>();
         //CreateMap<Photo, PhotosForDetailedDto>();
         CreateMap<User, UserForListDto>()
          .ForMember(dest => dest.PhotoUrl,opt => opt
            .MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url))
          .ForMember(dest => dest.Age, opt =>opt
          .MapFrom(src => src.DateofBirth.CalculateAge()));   
         CreateMap<User, UserForDetailedDto>()
          .ForMember(dest => dest.PhotoUrl,opt => opt  
            .MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url))
          .ForMember(dest => dest.Age, opt =>opt
          .MapFrom(src => src.DateofBirth.CalculateAge()));

          CreateMap<Photo, PhotosForDetailedDto>();
           CreateMap<UserForUpdateDto, User>();
         CreateMap<Photo, PhotoForReturnDto>();
         CreateMap<PhotoForCreationDto, Photo>();
         CreateMap<UserForRegisterDto, User>();
         //  CreateMap<User, UserForDetailedDto>() .ForMember(dest => dest.PhotoUrl,
         //  opt => opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url));
         //   CreateMap<Photo, PhotosForDetailedDto>() .ForMember(dest => dest.PhotoUrl,
         //  opt => opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url));   
      }
        
        
    }
}