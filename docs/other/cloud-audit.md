# Introduction
This document aims to describe the tools provided for AWS configuration audit and IAC audit, and to give explaination and guidance to use them.

# List of tools

## AWS configuration audit
* [prowler](https://github.com/prowler-cloud/prowler): Open-source auditing tool for AWS compliance with controls from several frameworks (CIS, NIST 800, NIST CSF, CISA, RBI, FedRAMP, PCI-DSS, GDPR, HIPAA, FFIEC, SOC2, GXP, AWS Well-Architected Framework Security Pillar, AWS Foundational Technical Review).
* [ScoutSuite](https://github.com/nccgroup/ScoutSuite): Open-source cloud security-auditing tool, to assess compliance with 
* [awspx](https://github.com/WithSecureLabs/awspx): Open-source tool for visualizing effective accesses and resource relationships within an AWS environment (IAM, EC2, S3 and Lambda). It has 2 main components: an ingestor to collect AWS information, and a web interface to explore AWS account data.

## IAC audit
* [Trivy](https://github.com/aquasecurity/trivy): Open-source automated security scanner for identification of security issues (OS, packages and dependencies obsolescence, CVE, IAC issues and misconfiugration, sensitives information and secrets).
* [Checkov](https://github.com/bridgecrewio/checkov): Open-source static code analysis tool for infrastructure as code, to audit security and compliance best practices for IAC configuration files (Terraform, Ansible, Kubernetes, Dockerfile, etc.).

## General prerequisites
* Python > 3.9
	* pip
	* poetry
* Docker
	* docker-compose
* Go (only for installing Trivy from source)
* AWS-CLI with valid Access Key and Region, and declared AWS variables
	* `AWS_ACCESS_KEY_ID`
	* `AWS_SECRET_ACCESS_KEY`
	* `AWS_SESSION_TOKEN`
* AWS IAM user or Role
	* Managed policies: SecurityAudit, ViewOnlyAccess

# AWS configuration audit

## Prowler

### Installation

prowler can be installed using `pip`, `docker` or from the source code.

For `pip`, run the command:
```
pip install prowler
```

For Docker, run the command:
```
docker run -ti --rm -v /your/local/dir/prowler-output:/home/prowler/output \
--name prowler \
--env AWS_ACCESS_KEY_ID \
--env AWS_SECRET_ACCESS_KEY \
--env AWS_SESSION_TOKEN \
toniblyx/prowler:latest
```

From the source code, unzip the archive `prowler-4.2.4.zip` and run the commands:
```
cd prowler-4.2.4
poetry shell
poetry install
```

## Usage

Run
```
prowler aws
```

## ScoutSuite

### Installation

ScoutSuite can be installed using `pip`, `Docker` or from the source code.

For `pip`, run the command:
```
pip install scoutsuite
```

For Docker, unzip the archive `ScoutSuite-5.14.0.zip` and run the commands:
```
cd ScoutSuite-5.14.0/docker
docker-compose up --build
```

From the source code, unzip the archive `ScoutSuite-5.14.0.zip` and run the commands:
```
cd ScoutSuite-5.14.0
pip install -r requirements.txt
python scout.py --help
```

### Usage

Run in a terminal using AWS-CLI:
```
python scout.py aws
```

or for Docker
```
docker run -it scoutsuite
```

## awspx

### Installation

**N.B.**: Docker is required to run awspx.
awspx can be used using the source code and will create a Docker container. 

Unzip the archive `awspx-1.3.4.zip` and run the commands:
```
cd awspx-1.3.4
chmod +x Installation
./INSTALL
```

### Usage

In an terminal configured with AWS-CLI, run the ingestor with the following commands:
```
awspx ingest
```

# IAC audit

## Trivy

### Installation

Trivy can be installed from Debian/Ubuntu repositories, Docker or source code.

For public repositories, run:
```
sudo apt-get install wget apt-transport-https gnupg
wget -qO - https://aquasecurity.github.io/trivy-repo/deb/public.key | gpg --dearmor | sudo tee /usr/share/keyrings/trivy.gpg > /dev/null
echo "deb [signed-by=/usr/share/keyrings/trivy.gpg] https://aquasecurity.github.io/trivy-repo/deb generic main" | sudo tee -a /etc/apt/sources.list.d/trivy.list
sudo apt-get update
sudo apt-get install trivy
```

For Docker, run:
```
docker pull aquasec/trivy:0.53.0
```

From source code, unzip the tarball `trivy_0.53.0_Linux-64bit.tar.gz` and run the commands:
```
cd trivy_0.53.0_Linux-64bit
go install trivy
```

### Usage

To scan a local directory for IaC misconfigurations, run:
```
docker run -v $PWD:/myapp aquasec/trivy config /myapp
```

To scan a Terraform plan files, run:
```
terraform plan --out tfplan
trivy conf tfplan
```

To scan Terraform plan representation in JSON, run:
```
terraform show -json tfplan > tfplan.json
trivy conf tfplan.json
```

## Checkov
### Installation
Checkov can be installed using pip or Homebrew.

To install Checkov using pip, run the following command:
~~~
pip3 install checkov
~~~
To install Checkov using Homebrew, run the following command:
~~~
brew install checkov
~~~
### Usage
Checkov can run on a full directory using the flag "--directory" or "-d" :
~~~
checkov -d /user/path/to/code
~~~

It can also run on a single file using "--file" or "-f" (this flag can be used multiple times):
~~~
checkov -f /user/cloudformation/example1.yml -f /user/cloudformation/example2.yml
~~~

Checkov can also analyse a docker image directly:
~~~
checkov --image <image-name>:tag --dockerfile-path /User/path/to/Dockerfile --bc-api-key ...
~~~
Finally, a terraform plan can be analyzed in json format
~~~
terraform init
terraform plan -out tf.plan
terraform show -json tf.plan  > tf.json
checkov -f tf.json
~~~
> Note:  `terraform show`  output file  `tf.json`  will be a single line. For that reason all findings will be reported line number 0 by Checkov

# References
* [prowler documentation](https://docs.prowler.com/)
* [ScoutSuite documentation](https://github.com/nccgroup/ScoutSuite/wiki)
* [awspx documentation](https://github.com/WithSecureLabs/awspx/wiki)
* [Trivy documentation](https://aquasecurity.github.io/trivy)
* [Checkov documentation](https://www.checkov.io/2.Basics/Installing%20Checkov.html)