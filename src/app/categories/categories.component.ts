import { Component, OnInit } from "@angular/core";
import { PostServiceService} from "../post-service.service"
@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.css"]
})
export class CategoriesComponent implements OnInit {
  categories: Array<any>;
  private cats;
  constructor(private data: PostServiceService ) {}

  ngOnInit(): void {
    //In the ngOnInit() function, add logic to populate the "categories" array using the "PostService" getCategories() function.
    this.cats = this.data.getCategories().subscribe(data => this.categories = data);
  }
}
