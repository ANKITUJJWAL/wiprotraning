import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  constructor(private route: ActivatedRoute) {}

  id: number | null = 0;
  name: string | null = '';

  ngOnInit() {
    // this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.route.params.subscribe((params) => {
      console.log(params);
      this.id = Number(params['id']);
      this.name = params['name'];
    });
  }
}
