# AngularLastFM

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.3.


# Coding Challenge
Develop an Angular (Typescript) Single-Page WebApp for searching music artist information provided by the official LastFM-API. Additionally users of the App should be able to compare two of their favorite artists side by side.

# Views
The following describes the views expected to be present in the App.
Navigation
The Navigation is placed at the top of the page. It includes the title of your app a search field and a navigation to the side-by-side comparison feature described below.

# Main-view
This is the entry point of the application. It shows the 10 top artists of a certain country. A
dropdown element is present at the top of the main content view containing three predefined countries and their respective country code. One element is selected by default and the respective data is fetched upon entering the application. The results are presented in a list view. Each list element provides the user with useful information about
the artist as well as an image.

# Detail-View
This view contains a detailed portfolio of the selected artist (name, banner image, amount of listeners and plays). Furthermore two sections below the meta information present users of the app with the artists top 5 tracks and top 5 albums (Also presented in a list view with the artwork, title and play count).

# Artist-search
As already mentioned above, the search bar is present in the Navigation section. Once the user starts typing the search is performed and the results are presented to the user in a result list. A click or tap on one of the found artists opens the respective detail view.

# (Bonus) Side-by-Side Comparison
Upon entering this view, the screen will be split in 2 sides vertically. Each side contains a search field where users can enter the name of an artist. Once the user starts typing the search is performed and matching results are presented in a result list. If a found artist is clicked/tapped a detail view of the artist is presented below the search field. Using both sides the user is then able to compare both artists by their meta information.

# General
Use the latest version of the Angular framework. For simplicity you can use the Angular Material Library ( https://material.angular.io ) as a source for your UI components. If you feel like customizing the whole experience you may do so. Any API Communication is preferred in JSON format.
In general the style of the application is entirely up to you. Animations are nice to have but not required. Responsive design for mobile as well as desktop devices is also not required but will be considered as a bonus.
There is no need for completion, this is supposed to be a way for you to demonstrate how well you can work yourself into an API and work with the means that the Angular
framework provides.

# Used Resources
https://www.udemy.com/course/der-angular-2-kurs/

https://stackoverflow.com/questions/40817280/how-to-change-angular-cli-favicon

https://www.last.fm/api

# Used Software
Webstorm

SmartGit

Mozilla Firefox

# Versions
Angular CLI: 12.2.4

Node: 16.6.1 (Unsupported)

Package Manager: npm 6.14.15

OS: win32 x64

# Installation

    Clone this repo
    cd into the folder of the cloned repo
    Install dependencies
    Update the LastFM API Key

        Go to api.service.ts and save your API keys into the file

        export class LastfmService {

            API_KEY_LASTFM = <your-lastFM-API-key-goes-here>
            API_KEY_THEMOVIEDB = <your-TheMovieDB-API-key-goes-here>

            constructor(private http: HttpClient) { }

    Run ng serve, and navigate to http://localhost:4200/

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
