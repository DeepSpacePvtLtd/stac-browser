/**
 * getPropertyDefinitions constructs the object that's used to display
 * properties in the sidebar for an Item or Collection. This method returns an object with
 * a "group" property that describes groups for extensions and external
 * provider specific field. It also contain a "properties" property which maps
 * properties found in STAC "properties" fields to either a display label, or an
 * object that describes the display characteristics of the field.
 */
export default function getPropertyDefinitions() {
  // Required and Common Metadata properties
  // that are shown in the property list.
  const coreProperties = {
    "datetime": {
      "label": "Acquired",
      "type": "date"
    },
    "created": {
      "label": "Created",
      "type": "date"
    },
    "updated": {
      "label": "Updated",
      "type": "date"
    },
    "start_datetime": {
      "label": "Start Time",
      "type": "date"
    },
    "end_datetime": {
      "label": "End Time",
      "type": "date"
    },
    "license": "License",
    "platform": "Platform",
    "instruments": "Instruments",
    "constellation": "Constellation",
    "mission": "Mission",
    "gsd": "Ground Sample Distance",

    // Backwards compatibility
    "provider": "Provider",
  };

  const stacExtensions = {
    checksum: {
      title: "Checksum",
      props: {
        "checksum:multihash": "Multihash"
      }
    },
    datacube: {
      title: "Data Cube",
      props: {
        "cube:dimensions": "Dimensions",
        skip: true // Value is a complex object that would require specific display logic TODO
      }
    },
    eo: {
      title: "Electro-Optical",
      props: {
        "eo:bands": {
          "label": "Bands",
          "skip": true // Handled separately from property list
        },
        "eo:cloud_cover": {
          "label": "Cloud cover",
          "suffix": "%"
        },

        // Backwards compatability
        "eo:platform": "Platform",
        "eo:constellation": "Constellation",
        "eo:instrument": "Instrument",
        "eo:gsd": {
          "label": "<abbr title=\"Ground sample distance (eo:gsd)\">GSD</abbr>",
          "suffix": "m"
        },
        "eo:epsg": "EPSG code",
        "eo:off_nadir": {
          "label": "Off-nadir angle",
          "suffix": "º"
        },
        "eo:azimuth": {
          "label": "Sun azimuth",
          "suffix": "º"
        },
        "eo:sun_azimuth": {
          "label": "Sun azimuth",
          "suffix": "º"
        },
        "eo:sun_elevation": {
          "label": "Sun elevation",
          "suffix": "º"
        }
      }
    },
    label: {
      title: "Labels",
      props: {
        "label:property": {
          "label": "Properties",
          "type": "label:property"
        },
        "label:classes": {
          "label": "Classes",
          "type": "label:classes"
        },
        "label:description": "Description",
        "label:type": "Type",
        "label:tasks": "Tasks",
        "label:methods": "Methods",
        "label:overviews": {
          "label": "Overviews",
          "type": "label:overviews"
        },

        // Backwards Compatability
        "label:task": "Task",
        "label:method": "Method",
        "label:overview": {
          "label": "Overview",
          "type": "label:overviews"
        },
      }
    },
    pc: {
      title: "Point Cloud",
      props: {
        "pc:count": "Number of Points",
        "pc:type": "Type",
        "pc:encoding": "Format",
        "pc:schemas": {
          label: "Schemas",
          skip: true // Value is a complex object that would require specific display logic TODO
        },
        "pc:density": "Density",
        "pc:statitics": {
          label: "Statistics",
          skip: true // Value is a complex object that would require specific display logic TODO
        }
      }
    },
    proj: {
      title: "Projection",
      props: {
        "proj:epsg": "EPSG Code",
        "proj:wkt2": "WKT2",
        "proj:projjson": "PROJJSON",
        "proj:geometry": {
          label: "Footprint",
          skip: true // Value is a complex object that would require specific display logic TODO
        },
        "proj:bbox": "Bounding Box",
        "proj:centroid": "Centroid",
        "proj:shape": "Shape",
        "proj:transform": "Transform"
      }
    },
    sar: {
      title: "SAR",
      props: {
        "sar:instrument_mode": "Instrument Mode",
        "sar:frequency_band": "Frequency Band",
        "sar:center_frequency	number": "Center Frequency",
        "sar:polarizations": "Polarizations",
        "sar:product_type": "Product Type",
        "sar:resolution_range": "Range Resolution",
        "sar:resolution_azimuth": "Azimuth Resolution",
        "sar:pixel_spacing_range": "Range Pixel Spacing",
        "sar:pixel_spacing_azimuth": "Aziumth Pixel Spacing",
        "sar:looks_range": "Range Looks",
	"sar:looks_azimuth": "Azimuth Looks",
        "sar:looks_equivalent_number": "Equivalent Number of Looks",
        "sar:observation_direction": "Observation Direction"
      }
    },
    sat: {
      title: "Satellite",
      props: {
        "sat:orbit_state": "Orbit State",
        "sat:relative_orbit": "Relative Orbit Number"
      }
    },
    sci: {
      title: "Scientific",
      props: {
        "sci:doi": "DOI",
        "sci:citation": "Citation",
        "sci:publications": "Publications"
      }
    },
    timestamps: {
      title: "Timestamps",
      props: {
        published: {
          "label": "Published",
          "type": "date"
        },
        expires: {
          "label": "Expires",
          "type": "date"
        },
        unpublished: {
          "label": "Unpublished",
          "type": "date"
        },
      }
    },
    version: {
      title: "Version",
      props: {
        "version": "Version",
        "deprecated": "Deprecated"
      }
    },
    view: {
      title: "View Geometry",
      props: {
        "view:off_nadir": {
          "label": "Off-nadir angle",
          "suffix": "º"
        },
        "view:incidence_angle": {
	  label: "Incidence angle",
	  suffix: "º"
	},
        "view:azimuth": {
	  label: "Viewing azimuth",
	  suffix: "º"
	},
        "view:sun_azimuth": {
	  label: "Sun azimuth",
	  suffix: "º"
	},
        "view:sun_elevation": {
	  label: "Sun elevation",
	  suffix: "º"
	}
      }
    },

    // Old STAC extensions
    dtr: {
      title: "Date Time Range",
      props: {
        "dtr:end_datetime": {
          "label": "End",
          "type": "date"
        },
        "dtr:start_datetime": {
          "label": "Start",
          "type": "date"
        }
      }
    }
  };

  const externalProviderGroups = {
    pl: {
      title: "Planet",
      props: {
        "pl:anomalous_pixels": {
          "label": "Anomalous pixels"
        },
        "pl:epsg_code": {
          "label": "EPSG code"
        },
        "pl:ground_control": {
          "label": "Ground control"
        },
        "pl:instrument": {
          "label": "Instrument"
        },
        "pl:item_type": {
          "label": "Source type"
        },
        "pl:origin_x": {
          "label": "X origin"
        },
        "pl:origin_y": {
          "label": "Y origin"
        },
        "pl:pixel_resolution": {
          "label": "Pixel resolution",
          "suffix": "m"
        },
        "pl:provider": {
          "label": "Provider"
        },
        "pl:published": {
          "label": "Published",
          "type": "date"
        },
        "pl:quality_category": {
          "label": "Quality category"
        },
        "pl:columns": {
          "label": "Columns"
        },
        "pl:rows": {
          "label": "Rows"
        },
        "pl:satellite_id": {
          "label": "Satellite ID"
        },
        "pl:strip_id": {
          "label": "Strip ID"
        },
        "pl:updated": {
          "label": "Updated",
          "type": "date"
        },
        "pl:usable_data": {
          "label": "Usable data"
        },
        "pl:view_angle": {
          "label": "View angle",
          "suffix": "º"
        }
      }
    },
    cbers: {
      title: "CBERS",
      props: {
        "cbers:data_type": "Data type",
        "cbers:path": "CBERS Path",
        "cbers:row": "CBERS Row",
      }
    },
    dg: {
      title: "Digital Globe",
      props: {
        "dg:catalog_id": "DigitalGlobe ID",
        "dg:platform": "Platform",
        "dg:product_level": "Product level",
      }
    },
    landsat: {
      title: "Landsat",
      props: {
        "landsat:": "Landsat",
        "landsat:product_id": "Product ID",
        "landsat:scene_id": "Scene ID",
        "landsat:processing_level": "Processing level",
        "landsat:tier": "Tier"
      }
    },
    gee: {
      title: "Google Earth Engine",
      props: {
        "gee:type": "Type",
        "gee:cadence": "Cadence",
        "gee:asset_schema": "Asset schema",
      }
    },
    sentinel: {
      title: "Sentinel",
      props: {
        "sentinel:utm_zone": "UTM zone",
        "sentinel:latitude_band": "Latitude band",
        "sentinel:grid_square": "Grid square",
        "sentinel:sequence": "Sequence",
        "sentinel:product_id": "Product ID"
      }
    }
  };

  // Load up the property definitions based on the above configuration.

  const propertyDefinitions = {
    groups: {},
    properties: {}
  };

  for(var coreProp in coreProperties) {
    propertyDefinitions.properties[coreProp] = coreProperties[coreProp];
  }

  for(var seGroup in stacExtensions) {
    propertyDefinitions.groups[seGroup] = stacExtensions[seGroup].title;
    for(var seProp in stacExtensions[seGroup].props) {
      propertyDefinitions.properties[seProp] = stacExtensions[seGroup].props[seProp];
    }
  }

  for(var exGroup in externalProviderGroups) {
    propertyDefinitions.groups[exGroup] = externalProviderGroups[exGroup].title;
    for(var exProp in externalProviderGroups[exGroup].props) {
      propertyDefinitions.properties[exProp] = externalProviderGroups[exGroup].props[exProp];
    }
  }

  return propertyDefinitions;
};