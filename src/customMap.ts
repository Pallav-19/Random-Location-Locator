export interface Mappable{
    location:{
        lat: number,
        lng:number
    }
    markerContent(): string;
    color:string;
}
// import { User } from "./User";
// import { Company } from "./Company";
export class CustomMap{

  private googleMap:google.maps.Map;


    constructor(divId: string){
        this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLDivElement
            , {
                zoom: 1,
                center: {
                    lat: 21.4188,
                    lng: 83.8347
                }

            });

    }
    addMarker(mappable: Mappable):void 
    {
       const marker  = new google.maps.Marker({
            map: this.googleMap,
            position:{
                lat :mappable.location.lat,
                lng : mappable.location.lng
            }
        });
     marker.addListener("click",()=>{
        const infowindow = new google.maps.InfoWindow({
            content: mappable.markerContent()
        });
        infowindow.open(this.googleMap,marker);
     })


    }


//     addCompanyMarker(company: Company):void{
//         new google.maps.Marker({
//             map: this.googleMap,
            
//                 position:{
//                     lat:company.location.lat,
//                     lng:company.location.long
//                 }
            
//         })


//     }



 }
