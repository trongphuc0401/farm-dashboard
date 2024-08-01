import { useState } from "react";
import "./AreaTop.scss";

const AreaTopPlanting = () => {
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState("cropType");

  const handleNewCropTypeClick = () => {
    setShowForm(true);
    setFormType("cropType");
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleNextPlantingDetails = () => {
    setFormType("plantingDetails");
  };

  return (
    <section>
      <div className="area-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="area-top-content">
                <h2>My Crops</h2>
                <div className="button-group">
                  <button
                    className="btn btn-primary"
                    onClick={handleNewCropTypeClick}
                  >
                    New Crop Type
                  </button>
                  <button className="btn btn-secondary">Add Planting</button>
                  <button className="btn btn-secondary">
                    <span className="icon-ellipsis-h"></span>
                  </button>
                </div>
                <div className="search-filter">
                  <div className="search">
                    <input type="text" placeholder="Search" />
                    <span className="icon-search"></span>
                  </div>
                  <div className="filter">
                    <button className="btn btn-secondary">
                      <span className="icon-filter"></span> Filter
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showForm && (
        <>
          <div className="overlay"></div>
          <div
            className={
              formType === "cropType"
                ? "crop-type-form"
                : "planting-details-form"
            }
          >
            <h3>
              {formType === "cropType" ? "New Crop Type" : "Planting Details"}
            </h3>
            <form>
              {formType === "cropType" ? (
                <>
                  <div>
                    <label htmlFor="type">Type:</label>
                    <input type="text" id="type" name="type" />
                  </div>
                  <div>
                    <label htmlFor="variety">Variety/Strain:</label>
                    <input type="text" id="variety" name="variety" />
                  </div>
                  <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" />
                  </div>
                  <div>
                    <label htmlFor="internalId">Internal ID:</label>
                    <input type="text" id="internalId" name="internalId" />
                  </div>
                  <div className="button-group">
                    <button type="button" onClick={handleCloseForm}>
                      Cancel
                    </button>
                    <button type="button">Save & New</button>
                    <button type="button" onClick={handleNextPlantingDetails}>
                      Next, Planting Detail
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label htmlFor="startBeforeLastFrost">
                      Start before last frost:
                    </label>
                    <input
                      type="text"
                      id="startBeforeLastFrost"
                      name="startBeforeLastFrost"
                    />
                  </div>
                  <div>
                    <label htmlFor="daysToEmerge">Days to Emerge:</label>
                    <input type="text" id="daysToEmerge" name="daysToEmerge" />
                  </div>
                  <div>
                    <label htmlFor="plantSpacing">Plant Spacing:</label>
                    <input type="text" id="plantSpacing" name="plantSpacing" />
                  </div>
                  <div>
                    <label htmlFor="rowSpacing">Row Spacing:</label>
                    <input type="text" id="rowSpacing" name="rowSpacing" />
                  </div>
                  <div>
                    <label htmlFor="plantingDepth">Planting Depth:</label>
                    <input
                      type="text"
                      id="plantingDepth"
                      name="plantingDepth"
                    />
                  </div>
                  <div>
                    <label htmlFor="averageHeight">Average Height:</label>
                    <input
                      type="text"
                      id="averageHeight"
                      name="averageHeight"
                    />
                  </div>
                  <div>
                    <label htmlFor="startMethod">Start Method:</label>
                    <input type="text" id="startMethod" name="startMethod" />
                  </div>
                  <div>
                    <label htmlFor="lightProfile">Light Profile:</label>
                    <input type="text" id="lightProfile" name="lightProfile" />
                  </div>
                  <div>
                    <label htmlFor="soilConditions">Soil Conditions:</label>
                    <input
                      type="text"
                      id="soilConditions"
                      name="soilConditions"
                    />
                  </div>
                  <div>
                    <label htmlFor="plantingDetails">Planting Details:</label>
                    <input
                      type="text"
                      id="plantingDetails"
                      name="plantingDetails"
                    />
                  </div>
                  <div>
                    <label htmlFor="pruningDetails">Pruning Details:</label>
                    <input
                      type="text"
                      id="pruningDetails"
                      name="pruningDetails"
                    />
                  </div>
                  <div className="button-group">
                    <button type="button" onClick={handleCloseForm}>
                      Cancel
                    </button>
                    <button type="button">Save</button>
                  </div>
                </>
              )}
            </form>
          </div>
        </>
      )}
    </section>
  );
};

export default AreaTopPlanting;
