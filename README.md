# demo-pulumi-import

Demo for bulk import of AWS resources.

This repo contains code to fully test/demonstrate bulk import of resources from AWS into Pulumi using boto3 to query AWS for resources, and then outputting a JSON file suitable for use with `pulumi import`:

* The `sample-infra` directory contains a Pulumi project that generates some sample infrastructure to be imported (to save the trouble of having to create a bunch of resources manually through the AWS console).
* The `import-target` directory contains a Pulumi project intended to be the target of the `pulumi import` command.

## Instructions

1. Clone `pulumi/pulumi-import-account-scraper` from the root of this repo. (The directory is `.gitignore`-d.)
1. Create a `virtualenv` for the account scraper, activate the `virtualenv`, and install the account scraper's dependencies:

    ```bash
    cd pulumi-import-aws-account-scraper
    virtualenv -p python3 venv
    source venv/bin/activate
    pip install -r requirements.txt
    ```

1. (Optional) Generate some resources by running the Pulumi stack in `sample-infra`.
1. Run the account scraper to generate a JSON file for `pulumi import`:

    ```bash
    cd pulumi-import-aws-account-scraper
    source venv/bin/activate
    python account_scraper.py > ../pulumi-import.json
    ```

1. Import the infrastructure into the target project:

    ```bash
    pulumi import -f ../pulumi-import.json -o imported-resources.ts -y
    ```
