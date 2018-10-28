# Pull Request Checklist

Here's what we expect of a good quality pull request â€” be sure to follow all these items for a smooth landing!

## Code passes Bamboo build
Pass all the build tasks, e.g. linting
note: 
NightWatch linting is still not complete, please check the code and linking are done correctly till we sort out the linting issue. 

## One commit per pull request
This give us the benefit to have a clear and concise git history that clearly and easily documents the changes done and the reasons why.

This is not against "commit early and commit often", just need to squash the commits into a single commit and do a force push when create pull request.

## Please review your check-in before committing your code
This will help reducing reviewing time over basic syntax. 
Run all test cases that were affected with your change-set.

## Include story/task/bug ID in commit message
Having ID in commit will trigger the automated transition in JIRA once the pull request merge into master.


# Write a good Git commit message

How to Write a Git Commit Message: http://chris.beams.io/posts/git-commit/
## Separate subject from body with a blank line
## Limit the subject line to 50 characters
## Capitalize the subject line
## Do not end the subject line with a period
## Use the imperative mood in the subject line
## Wrap the body at 72 characters
## Use the body to explain what and why vs. how
