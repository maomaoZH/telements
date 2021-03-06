# Contributing

Thanks for your interest in contributing to the Telements Docs! :tada:


## Creating an Issue

* It is required that you clearly describe the steps necessary to reproduce the issue you are running into. Although we would love to help our users as much as possible, diagnosing issues without clear reproduction steps is extremely time-consuming and simply not sustainable.

* The issue list of this repository is exclusively for bug reports, docs issues and feature requests. Non-conforming issues will be closed immediately.

* Issues with no clear steps to reproduce will not be triaged. If an issue is labeled with "needs reply" and receives no further replies from the author of the issue for more than 5 days, it will be closed.

* If you think you have found a bug, or have a new feature idea, please start by making sure it hasn't already been [reported](https://github.com/telekom/telements/issues?utf8=%E2%9C%93&q=is%3Aissue). You can search through existing issues to see if there is a similar one reported. Include closed issues as it may have been closed with a solution.

* Next, [create a new issue](https://github.com/telekom/telements/issues/new) that thoroughly explains the problem.

## Creating a Pull Request

* We appreciate you taking the time to contribute! Before submitting a pull request, we ask that you please [create an issue](#creating-an-issue) that explains the bug, docs issue, or feature request and let us know that you plan on creating a pull request for it. If an issue already exists, please comment on that issue letting us know you would like to submit a pull request for it. This helps us to keep track of the pull request and make sure there isn't duplicated effort.

* Looking for an issue to fix? Make sure to look through our issues with the [help wanted](https://github.com/telekom/telements/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22) label!

### Setup

1. Fork the repo.
2. Clone your fork.
3. Make a branch for your change.
4. Run `npm install` (make sure you have [node](https://nodejs.org/en/) and [npm](http://blog.npmjs.org/post/85484771375/how-to-install-npm) installed first).


#### Developing

1. Run `npm run dev`


#### Adding Documentation

1. To add documentation first create a new markdown file in `docs-md` in the folder that fits your doc best. For example, if your doc is covering something in the Telements compiler, you would put it in `docs-md/compiler`.
2. Write your documentation following the style in the other docs markdown files. Try to aim for being as clear and concise as possible. We recommend checking out the [vue.js docs](https://vuejs.org/) for examples of good docs.
3. Open `src/components/stencil-site.tsx` in your editor and add the path to your new docs markdown file but using `.html` instead of `.md` to [here](https://github.com/ionic-team/stencil-site/blob/master/src/components/stencil-site/stencil-site.tsx#L33). For example, if my new doc was located at `docs-md/basics/my-cool-doc.md` I would add `'my-cool-doc': 'basics/my-cool-doc.html',` to that object.
4. Open `src/components/site-menu.tsx` in your editor and add a new `<stencil-route-link />` with the `url` attribute pointing to the path for your new doc. For example, if I just added the doc mentioned above, my path would be `basics/my-cool-doc`.
5. Run `npm run dev` to make sure your doc shows up in the menu, that you can navigate to the doc, and that your docs layout looks correct.

## License

By contributing your code to the ionic-team/stencil-site GitHub Repository, you agree to license your contribution under the MIT license.
