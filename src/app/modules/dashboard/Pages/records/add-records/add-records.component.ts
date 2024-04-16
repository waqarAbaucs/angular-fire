import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-records',
  templateUrl: './add-records.component.html',
  styleUrls: ['./add-records.component.css']
})
export class AddRecordsComponent implements OnInit {

  form!: FormGroup;
  superSectors: any[];
  organizationType: any[];
  sectorsData: any;

  constructor(private fb: FormBuilder) {
    // this.superSectors = [
    //   { name: 'Other Manufacturing', code: 'OtherManufacturing' },
    //   { name: 'Life Sciences', code: 'LifeSciences' },
    //   { name: 'High Tech', code: 'HighTech' },
    //   { name: 'Consumer Goods', code: 'ConsumerGoods' },
    //   { name: 'Energy', code: 'Energy' },
    //   { name: 'Chemicals', code: 'Chemicals' }
    // ];

    this.superSectors = ["Other Manufacturing", "Life Sciences", "High Tech", "Consumer Goods", "Energy", "Chemicals", "Retail & Wholesale", "Services (Non-Financial)", "Logistics", "Other Non-Manufacturing", "Transportation Equipment", "Insurance/Reinsurance", "Banking/Financial Services"];

    this.organizationType = [
      { name: 'Listed Public Limited Company', code: 'ListedPublicLimitedCompany' },
      { name: 'Unlisted Public Limited Company', code: 'UnlistedPublicLimitedCompany' },
      { name: 'Private Limited Company', code: 'PrivateLimitedCompany' },
      { name: 'Sole Proprietorship', code: 'SoleProprietorship' },
      { name: 'Others', code: 'Others' }
    ];

    // Define the JSON data representing the dependent dropdown options
    this.sectorsData = {
      "Other Manufacturing": [
        "Textiles Upstream (Spinning & Weaving)",
        "Textiles Downstream (Apparel & Other Made-ups",
        "Combination of Textiles Upstream & Downstream",
        "Other Manufacturing",
        "Machinery Manufacturing",
        "Paper & Allied Products Manufacturing",
        "Electrical Equipment Manufacturing",
        "Cement",
        "Steel"
      ],
      "Life Sciences": [
        "Pharmaceutical",
        "Medical Devices & Equipment",
        "Pharmaceutical Combination",
        "Biotechnology",
        "Life Sciences Combination",
        "Medical Devices Combination",
        "Pharmaceutical Other"
      ],
      "High Tech": [
        "High Tech (Services)",
        "High Tech (Software and Virtual Products)",
        "High Tech (Manufactured Products & Hardware)",
        "High Tech Software/Virtual Products & Service Combination",
        "All High Tech Products & Services Combination",
        "High Tech Manufactured/Hardware & Software /Virtual Products Combination",
        "High Tech Products or Services (Other)"
      ],
      "Consumer Goods": [
        "Food",
        "Sugar & Allied Industries",
        "Personal Care & Household Products",
        "Consumer Goods Combination",
        "Beverages",
        "Tobacco"
      ],
      "Energy": [
        "Energy Utilities",
        "Alternative & Renewable Energy",
        "Energy Fully Integrated and Exploration & Production",
        "Energy Other",
        "Alternative & Renewable Energy Combination",
        "Energy Downstream",
        "Energy Engineering, Procurement & Construction",
        "Energy Services & Drilling"
      ],
      "Chemicals": [
        "Fertilizers",
        "Speciality Chemicals Combination or Other",
        "Speciality Chemicals",
        "Consumer Chemicals",
        "Chemicals Combination",
        "Basic Chemicals Combination or Other"
      ],
      "Retail & Wholesale": [
        "Apparel, Fashion, Footwear & Accessories Retail",
        "Grocery, Pharmacy & General Merchandise Retail",
        "Department Stores",
        "Wholesale Distribution",
        "Home, Hardware, Building & Garden Supply Retail",
        "Restaurants"
      ],
      "Services (Non-Financial)": [
        "Education",
        "Information & Data Processing Services",
        "Services Combination or Other",
        "Business Process Outsourcing",
        "Business/Professional Services – Other",
        "Government/Public Administration & Other Civic, Social Political or Religious Organisations",
        "Media & Entertainment"
      ],
      "Logistics": [
        "Warehousing & Distribution",
        "Logistics Combination",
        "Shipping",
        "Express",
        "Freight Forwarding"
      ],
      "Other Non-Manufacturing": [
        "Other Non-Manufacturing Combination",
        "Construction",
        "Agriculture, Fishing & Hunting",
        "Real Estate"
      ],
      "Transportation Equipment": [
        "Automobile Manufacturing",
        "Automobile Components Manufacturing"
      ],
      "Insurance/Reinsurance": [
        "Life Insurance",
        "Life & Non-Life Insurers Combination",
        "Insurance/Reinsurance & Banking/Financial Services Combination"
      ],
      "Banking/Financial Services": [
        "Banking/Financial Services Organisation Combination "
      ]
    };
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      companyId: ['', Validators.required],
      employeeCount: ['', Validators.required],
      organizationName: ['', Validators.required],
      revenueFootprint: ['', Validators.required],
      organizationType: ['', Validators.required],
      superSector: ['', Validators.required],
      sector: ['', Validators.required]
    });

  }

  onSuperSectorChange(): void {
    this.form.get('sector')?.setValue(null); // Reset sector dropdown value
  }

  getFilteredSectors(): string[] {
    const selectedSuperSector = this.form.get('superSector')?.value;
    return selectedSuperSector ? this.sectorsData[selectedSuperSector] : [];
  }

  submitRecord() {
    console.log(this.form.value);
  }

}
