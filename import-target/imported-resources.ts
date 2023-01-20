import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

const import_vpc_aefe77d6 = new aws.ec2.Vpc("import-vpc-aefe77d6", {
    cidrBlock: "172.31.0.0/16",
    enableDnsHostnames: true,
}, {
    protect: true,
});
const vpc_vpc_0428f3875c1a9ad58 = new aws.ec2.Vpc("vpc-vpc-0428f3875c1a9ad58", {
    cidrBlock: "10.0.0.0/16",
    tags: {
        Name: "vpc",
    },
}, {
    protect: true,
});
const bad_vpc_vpc_0f12a82357335a28f = new aws.ec2.Vpc("bad-vpc-vpc-0f12a82357335a28f", {
    cidrBlock: "10.0.0.0/16",
    tags: {
        Name: "bad-vpc",
    },
}, {
    protect: true,
});
const vpc_private_1_subnet_09f974465197eee96 = new aws.ec2.Subnet("vpc-private-1-subnet-09f974465197eee96", {
    availabilityZone: "us-west-2a",
    availabilityZoneId: "usw2-az2",
    cidrBlock: "10.0.0.0/19",
    privateDnsHostnameTypeOnLaunch: "ip-name",
    tags: {
        Name: "vpc-private-1",
        SubnetType: "Private",
    },
    vpcId: "vpc-0428f3875c1a9ad58",
}, {
    protect: true,
});
const import_subnet_eebfa497 = new aws.ec2.Subnet("import-subnet-eebfa497", {
    availabilityZone: "us-west-2b",
    availabilityZoneId: "usw2-az1",
    cidrBlock: "172.31.16.0/20",
    mapPublicIpOnLaunch: true,
    privateDnsHostnameTypeOnLaunch: "ip-name",
    vpcId: "vpc-aefe77d6",
}, {
    protect: true,
});
const import_subnet_edfe0bb0 = new aws.ec2.Subnet("import-subnet-edfe0bb0", {
    availabilityZone: "us-west-2c",
    availabilityZoneId: "usw2-az3",
    cidrBlock: "172.31.0.0/20",
    mapPublicIpOnLaunch: true,
    privateDnsHostnameTypeOnLaunch: "ip-name",
    vpcId: "vpc-aefe77d6",
}, {
    protect: true,
});
const vpc_private_3_subnet_03be118b409fc9f68 = new aws.ec2.Subnet("vpc-private-3-subnet-03be118b409fc9f68", {
    availabilityZone: "us-west-2c",
    availabilityZoneId: "usw2-az3",
    cidrBlock: "10.0.128.0/19",
    privateDnsHostnameTypeOnLaunch: "ip-name",
    tags: {
        Name: "vpc-private-3",
        SubnetType: "Private",
    },
    vpcId: "vpc-0428f3875c1a9ad58",
}, {
    protect: true,
});
const vpc_public_2_subnet_027c79cbf817cfc83 = new aws.ec2.Subnet("vpc-public-2-subnet-027c79cbf817cfc83", {
    availabilityZone: "us-west-2b",
    availabilityZoneId: "usw2-az1",
    cidrBlock: "10.0.96.0/20",
    mapPublicIpOnLaunch: true,
    privateDnsHostnameTypeOnLaunch: "ip-name",
    tags: {
        Name: "vpc-public-2",
        SubnetType: "Public",
    },
    vpcId: "vpc-0428f3875c1a9ad58",
}, {
    protect: true,
});
const vpc_public_3_subnet_08e5294bb57c71be5 = new aws.ec2.Subnet("vpc-public-3-subnet-08e5294bb57c71be5", {
    availabilityZone: "us-west-2c",
    availabilityZoneId: "usw2-az3",
    cidrBlock: "10.0.160.0/20",
    mapPublicIpOnLaunch: true,
    privateDnsHostnameTypeOnLaunch: "ip-name",
    tags: {
        Name: "vpc-public-3",
        SubnetType: "Public",
    },
    vpcId: "vpc-0428f3875c1a9ad58",
}, {
    protect: true,
});
const import_subnet_72e2e639 = new aws.ec2.Subnet("import-subnet-72e2e639", {
    availabilityZone: "us-west-2a",
    availabilityZoneId: "usw2-az2",
    cidrBlock: "172.31.48.0/20",
    mapPublicIpOnLaunch: true,
    privateDnsHostnameTypeOnLaunch: "ip-name",
    vpcId: "vpc-aefe77d6",
}, {
    protect: true,
});
const vpc_private_2_subnet_0d91266bb85d42549 = new aws.ec2.Subnet("vpc-private-2-subnet-0d91266bb85d42549", {
    availabilityZone: "us-west-2b",
    availabilityZoneId: "usw2-az1",
    cidrBlock: "10.0.64.0/19",
    privateDnsHostnameTypeOnLaunch: "ip-name",
    tags: {
        Name: "vpc-private-2",
        SubnetType: "Private",
    },
    vpcId: "vpc-0428f3875c1a9ad58",
}, {
    protect: true,
});
const vpc_public_1_subnet_0a94aecb836aa7961 = new aws.ec2.Subnet("vpc-public-1-subnet-0a94aecb836aa7961", {
    availabilityZone: "us-west-2a",
    availabilityZoneId: "usw2-az2",
    cidrBlock: "10.0.32.0/20",
    mapPublicIpOnLaunch: true,
    privateDnsHostnameTypeOnLaunch: "ip-name",
    tags: {
        Name: "vpc-public-1",
        SubnetType: "Public",
    },
    vpcId: "vpc-0428f3875c1a9ad58",
}, {
    protect: true,
});
const import_subnet_1a8fe231 = new aws.ec2.Subnet("import-subnet-1a8fe231", {
    availabilityZone: "us-west-2d",
    availabilityZoneId: "usw2-az4",
    cidrBlock: "172.31.32.0/20",
    mapPublicIpOnLaunch: true,
    privateDnsHostnameTypeOnLaunch: "ip-name",
    vpcId: "vpc-aefe77d6",
}, {
    protect: true,
});
const vpc_private_3_rtb_045300c2b0901d0fd = new aws.ec2.RouteTable("vpc-private-3-rtb-045300c2b0901d0fd", {
    routes: [{
        cidrBlock: "0.0.0.0/0",
        natGatewayId: "nat-0fa8817efa9a78f92",
    }],
    tags: {
        Name: "vpc-private-3",
        SubnetType: "Private",
    },
    vpcId: "vpc-0428f3875c1a9ad58",
}, {
    protect: true,
});
const import_rtb_d4f69daf = new aws.ec2.RouteTable("import-rtb-d4f69daf", {
    routes: [{
        cidrBlock: "0.0.0.0/0",
        gatewayId: "igw-637e8d1a",
    }],
    vpcId: "vpc-aefe77d6",
}, {
    protect: true,
});
const import_rtb_0584c3750a4dac263 = new aws.ec2.RouteTable("import-rtb-0584c3750a4dac263", {vpcId: "vpc-0428f3875c1a9ad58"}, {
    protect: true,
});
const vpc_public_2_rtb_08d1b49c8c88562f8 = new aws.ec2.RouteTable("vpc-public-2-rtb-08d1b49c8c88562f8", {
    routes: [{
        cidrBlock: "0.0.0.0/0",
        gatewayId: "igw-0105eaa1b817e6c85",
    }],
    tags: {
        Name: "vpc-public-2",
        SubnetType: "Public",
    },
    vpcId: "vpc-0428f3875c1a9ad58",
}, {
    protect: true,
});
const vpc_private_1_rtb_0c9321e442c165e00 = new aws.ec2.RouteTable("vpc-private-1-rtb-0c9321e442c165e00", {
    routes: [{
        cidrBlock: "0.0.0.0/0",
        natGatewayId: "nat-080cfe692573aa3ba",
    }],
    tags: {
        Name: "vpc-private-1",
        SubnetType: "Private",
    },
    vpcId: "vpc-0428f3875c1a9ad58",
}, {
    protect: true,
});
const vpc_private_2_rtb_05b144e40bef10cd4 = new aws.ec2.RouteTable("vpc-private-2-rtb-05b144e40bef10cd4", {
    routes: [{
        cidrBlock: "0.0.0.0/0",
        natGatewayId: "nat-0ce6a37394fe9d40a",
    }],
    tags: {
        Name: "vpc-private-2",
        SubnetType: "Private",
    },
    vpcId: "vpc-0428f3875c1a9ad58",
}, {
    protect: true,
});
const vpc_public_1_rtb_0861bec6dce4430bc = new aws.ec2.RouteTable("vpc-public-1-rtb-0861bec6dce4430bc", {
    routes: [{
        cidrBlock: "0.0.0.0/0",
        gatewayId: "igw-0105eaa1b817e6c85",
    }],
    tags: {
        Name: "vpc-public-1",
        SubnetType: "Public",
    },
    vpcId: "vpc-0428f3875c1a9ad58",
}, {
    protect: true,
});
const vpc_public_3_rtb_0d29ec1f67eec9a26 = new aws.ec2.RouteTable("vpc-public-3-rtb-0d29ec1f67eec9a26", {
    routes: [{
        cidrBlock: "0.0.0.0/0",
        gatewayId: "igw-0105eaa1b817e6c85",
    }],
    tags: {
        Name: "vpc-public-3",
        SubnetType: "Public",
    },
    vpcId: "vpc-0428f3875c1a9ad58",
}, {
    protect: true,
});
const import_rtb_090717d6f0ea1b211 = new aws.ec2.RouteTable("import-rtb-090717d6f0ea1b211", {vpcId: "vpc-0f12a82357335a28f"}, {
    protect: true,
});
const vpc_1_nat_080cfe692573aa3ba = new aws.ec2.NatGateway("vpc-1-nat-080cfe692573aa3ba", {
    allocationId: "eipalloc-0d84e11481652678d",
    privateIp: "10.0.46.15",
    subnetId: "subnet-0a94aecb836aa7961",
    tags: {
        Name: "vpc-1",
    },
}, {
    protect: true,
});
const vpc_3_nat_0fa8817efa9a78f92 = new aws.ec2.NatGateway("vpc-3-nat-0fa8817efa9a78f92", {
    allocationId: "eipalloc-050c48b247c54d0e8",
    privateIp: "10.0.166.204",
    subnetId: "subnet-08e5294bb57c71be5",
    tags: {
        Name: "vpc-3",
    },
}, {
    protect: true,
});
const vpc_2_nat_0ce6a37394fe9d40a = new aws.ec2.NatGateway("vpc-2-nat-0ce6a37394fe9d40a", {
    allocationId: "eipalloc-05792690039745ced",
    privateIp: "10.0.111.41",
    subnetId: "subnet-027c79cbf817cfc83",
    tags: {
        Name: "vpc-2",
    },
}, {
    protect: true,
});
const vpc_igw_0105eaa1b817e6c85 = new aws.ec2.InternetGateway("vpc-igw-0105eaa1b817e6c85", {
    tags: {
        Name: "vpc",
    },
    vpcId: "vpc-0428f3875c1a9ad58",
}, {
    protect: true,
});
const import_igw_637e8d1a = new aws.ec2.InternetGateway("import-igw-637e8d1a", {vpcId: "vpc-aefe77d6"}, {
    protect: true,
});
const import_rtbassoc_02830eb68888192ad = new aws.ec2.RouteTableAssociation("import-rtbassoc-02830eb68888192ad", {
    routeTableId: "rtb-045300c2b0901d0fd",
    subnetId: "subnet-03be118b409fc9f68",
}, {
    protect: true,
});
const import_rtbassoc_0f7316f43e0e1ecbb = new aws.ec2.RouteTableAssociation("import-rtbassoc-0f7316f43e0e1ecbb", {
    routeTableId: "rtb-08d1b49c8c88562f8",
    subnetId: "subnet-027c79cbf817cfc83",
}, {
    protect: true,
});
const import_rtbassoc_06529e993bd2fa1f3 = new aws.ec2.RouteTableAssociation("import-rtbassoc-06529e993bd2fa1f3", {
    routeTableId: "rtb-0c9321e442c165e00",
    subnetId: "subnet-09f974465197eee96",
}, {
    protect: true,
});
const import_rtbassoc_069df971f15e6ffdd = new aws.ec2.RouteTableAssociation("import-rtbassoc-069df971f15e6ffdd", {
    routeTableId: "rtb-05b144e40bef10cd4",
    subnetId: "subnet-0d91266bb85d42549",
}, {
    protect: true,
});
const import_rtbassoc_0da4974fb11b61c28 = new aws.ec2.RouteTableAssociation("import-rtbassoc-0da4974fb11b61c28", {
    routeTableId: "rtb-0861bec6dce4430bc",
    subnetId: "subnet-0a94aecb836aa7961",
}, {
    protect: true,
});
const import_rtbassoc_044a6c4007085d163 = new aws.ec2.RouteTableAssociation("import-rtbassoc-044a6c4007085d163", {
    routeTableId: "rtb-0d29ec1f67eec9a26",
    subnetId: "subnet-08e5294bb57c71be5",
}, {
    protect: true,
});
const import_eipalloc_0d84e11481652678d = new aws.ec2.Eip("import-eipalloc-0d84e11481652678d", {
    networkBorderGroup: "us-west-2",
    networkInterface: "eni-0d6014904639c421d",
    publicIpv4Pool: "amazon",
    vpc: true,
}, {
    protect: true,
});
const import_eipalloc_05792690039745ced = new aws.ec2.Eip("import-eipalloc-05792690039745ced", {
    networkBorderGroup: "us-west-2",
    networkInterface: "eni-09cd6b66812d87930",
    publicIpv4Pool: "amazon",
    vpc: true,
}, {
    protect: true,
});
const import_eipalloc_050c48b247c54d0e8 = new aws.ec2.Eip("import-eipalloc-050c48b247c54d0e8", {
    networkBorderGroup: "us-west-2",
    networkInterface: "eni-0d5d85791879e25b3",
    publicIpv4Pool: "amazon",
    vpc: true,
}, {
    protect: true,
});
const aws_cloud9_Pulumi_Workshop_a541974ea95d4daebf53672501fac788_i_01819466a01d62322 = new aws.ec2.Instance("aws-cloud9-Pulumi-Workshop-a541974ea95d4daebf53672501fac788-i-01819466a01d62322", {
    ami: "ami-06b42db963a3e1fc7",
    availabilityZone: "us-west-2b",
    capacityReservationSpecification: {
        capacityReservationPreference: "open",
    },
    cpuCoreCount: 1,
    cpuThreadsPerCore: 2,
    iamInstanceProfile: "Pulumi-Workshop-Admin",
    instanceInitiatedShutdownBehavior: "stop",
    instanceType: "m5.large",
    maintenanceOptions: {
        autoRecovery: "default",
    },
    metadataOptions: {
        httpEndpoint: "enabled",
        httpPutResponseHopLimit: 1,
        httpTokens: "optional",
        instanceMetadataTags: "disabled",
    },
    privateIp: "172.31.29.6",
    rootBlockDevice: {
        iops: 100,
        volumeSize: 20,
        volumeType: "gp2",
    },
    securityGroups: ["aws-cloud9-Pulumi-Workshop-a541974ea95d4daebf53672501fac788-InstanceSecurityGroup-1T5RFHL0T1M4G"],
    subnetId: "subnet-eebfa497",
    tags: {
        Name: "aws-cloud9-Pulumi-Workshop-a541974ea95d4daebf53672501fac788",
    },
    tenancy: "default",
    userData: "a4f01264fd5a02d7281e3992f5bd8c06b9ecf834",
    vpcSecurityGroupIds: ["sg-003c5e24d2f3360e6"],
}, {
    protect: true,
});
const import_sg_031777187d9e32596 = new aws.ec2.SecurityGroup("import-sg-031777187d9e32596", {
    description: "default VPC security group",
    egress: [{
        cidrBlocks: ["0.0.0.0/0"],
        fromPort: 0,
        protocol: "-1",
        toPort: 0,
    }],
    ingress: [{
        fromPort: 0,
        protocol: "-1",
        self: true,
        toPort: 0,
    }],
    name: "default",
    vpcId: "vpc-0f12a82357335a28f",
}, {
    protect: true,
});
const aws_cloud9_Pulumi_Workshop_a541974ea95d4daebf53672501fac788_sg_003c5e24d2f3360e6 = new aws.ec2.SecurityGroup("aws-cloud9-Pulumi-Workshop-a541974ea95d4daebf53672501fac788-sg-003c5e24d2f3360e6", {
    description: "Security group for AWS Cloud9 environment aws-cloud9-Pulumi-Workshop-a541974ea95d4daebf53672501fac788",
    egress: [{
        cidrBlocks: ["0.0.0.0/0"],
        fromPort: 0,
        protocol: "-1",
        toPort: 0,
    }],
    ingress: [{
        cidrBlocks: [
            "34.217.141.224/27",
            "34.218.119.32/27",
        ],
        fromPort: 22,
        protocol: "tcp",
        toPort: 22,
    }],
    name: "aws-cloud9-Pulumi-Workshop-a541974ea95d4daebf53672501fac788-InstanceSecurityGroup-1T5RFHL0T1M4G",
    tags: {
        Name: "aws-cloud9-Pulumi-Workshop-a541974ea95d4daebf53672501fac788",
    },
    vpcId: "vpc-aefe77d6",
}, {
    protect: true,
});
const import_sg_53ae3511 = new aws.ec2.SecurityGroup("import-sg-53ae3511", {
    description: "default VPC security group",
    egress: [{
        cidrBlocks: ["0.0.0.0/0"],
        fromPort: 0,
        protocol: "-1",
        toPort: 0,
    }],
    ingress: [{
        fromPort: 0,
        protocol: "-1",
        self: true,
        toPort: 0,
    }],
    name: "default",
    vpcId: "vpc-aefe77d6",
}, {
    protect: true,
});
const import_sg_082217c8f2b345530 = new aws.ec2.SecurityGroup("import-sg-082217c8f2b345530", {
    description: "default VPC security group",
    egress: [{
        cidrBlocks: ["0.0.0.0/0"],
        fromPort: 0,
        protocol: "-1",
        toPort: 0,
    }],
    ingress: [{
        fromPort: 0,
        protocol: "-1",
        self: true,
        toPort: 0,
    }],
    name: "default",
    vpcId: "vpc-0428f3875c1a9ad58",
}, {
    protect: true,
});
