<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Helper\Help;
class CourseResourcee extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id'=>$this->id,
            'coursedetails'=>$this->coursedetails,
            'certification'=>$this->certification,
             'whothiscoursefor'=>$this->whothiscoursefor,
            'learning'=>$this->learning,
<<<<<<< HEAD
            'price'=>$this->price,
            // "price"=>$this->currency_name == 'naira'?$this->price: (new Help)->constant()->result->NGN * $this->price,
=======
            //  'price'=>$this->price,
             "price"=>$this->currency_name == 'naira'?$this->price: (new Help)->constant()->result->NGN * $this->price,
>>>>>>> 05c22c9b8edf9775407bfc6ae0eeb5fb662143f4
             "converted"=>$this->currency_name == 'naira'?false :true,
            'instructor'=>$this->instructor,
            'rating'=>$this->rating,
             'duration'=>$this->duration,
            'lesson'=>$this->lesson,
             'quizzes'=>$this->quizzes,
            'certificate'=>$this->certificate,
            'language'=>$this->language,
            'access'=>$this->access,
            'MainHead'=>$this->MainHead,
             'coursename'=>$this->coursename,
             'picture'=>$this->picture,
             'coursetype'=>'TMC'
        ];
    }
}
