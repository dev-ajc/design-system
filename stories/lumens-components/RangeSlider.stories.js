import React, {useState} from 'react'
import RangeSlider from '../../src/components/RangeSlider'

export default {
    title: 'ReactJS Components/RangeSlider',
    component: RangeSlider,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'A customizable range slider for selecting numeric values',
        docs: {
            description: {
                component:
                    'The RangeSlider component allows users to select a value within a specified range by moving a slider thumb along a track.'
            }
        }
    },
    argTypes: {
        min: {
            control: {type: 'number'},
            description: 'Minimum value of the slider',
            table: {
                type: {summary: 'number'},
                defaultValue: {summary: 0}
            }
        },
        max: {
            control: {type: 'number'},
            description: 'Maximum value of the slider',
            table: {
                type: {summary: 'number'},
                defaultValue: {summary: 100}
            }
        },
        step: {
            control: {type: 'number'},
            description: 'Step increment',
            table: {
                type: {summary: 'number'},
                defaultValue: {summary: 1}
            }
        },
        defaultValue: {
            control: {type: 'number'},
            description: 'Default value (uncontrolled component)',
            table: {
                type: {summary: 'number'}
            }
        },
        value: {
            control: {type: 'number'},
            description: 'Current value (controlled component)',
            table: {
                type: {summary: 'number'}
            }
        },
        onChange: {
            action: 'changed',
            description: 'Handler called when the value changes',
            table: {
                type: {summary: 'function'}
            }
        },
        onChangeComplete: {
            action: 'change completed',
            description: 'Handler called when dragging ends',
            table: {
                type: {summary: 'function'}
            }
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the slider is disabled',
            table: {
                type: {summary: 'boolean'},
                defaultValue: {summary: false}
            }
        },
        showLabels: {
            control: 'boolean',
            description: 'Whether to show min/max labels',
            table: {
                type: {summary: 'boolean'},
                defaultValue: {summary: true}
            }
        },
        showValue: {
            control: 'boolean',
            description: 'Whether to show current value',
            table: {
                type: {summary: 'boolean'},
                defaultValue: {summary: true}
            }
        },
        variant: {
            control: {type: 'select'},
            options: ['primary', 'secondary', 'tertiary', 'success', 'danger', 'warning', 'info'],
            description: 'Color variant',
            table: {
                type: {summary: 'string'},
                defaultValue: {summary: 'primary'}
            }
        },
        size: {
            control: {type: 'select'},
            options: ['small', 'medium', 'large'],
            description: 'Size variant',
            table: {
                type: {summary: 'string'},
                defaultValue: {summary: 'medium'}
            }
        },
        formatValue: {
            description: 'Function to format displayed value',
            table: {
                type: {summary: 'function'}
            }
        },
        labelMin: {
            control: 'text',
            description: 'Custom label for minimum value',
            table: {
                type: {summary: 'node'}
            }
        },
        labelMax: {
            control: 'text',
            description: 'Custom label for maximum value',
            table: {
                type: {summary: 'node'}
            }
        }
    }
}

// Basic Template
const Template = (args) => <RangeSlider {...args} />

// Default Story
export const Default = Template.bind({})
Default.args = {
    min: 0,
    max: 100,
    step: 1,
    defaultValue: 50,
    disabled: false,
    showLabels: true,
    showValue: true,
    variant: 'primary',
    size: 'medium'
}
Default.parameters = {
    docs: {
        description: {
            story: 'Basic range slider with default settings.'
        }
    }
}

// Size Variants
export const SizeVariants = () => (
    <div className="d-flex flex-column gap-lg">
        <div>
            <h4 className="mb-xs">Small</h4>
            <RangeSlider min={0} max={100} defaultValue={30} size="small" />
        </div>
        <div>
            <h4 className="mb-xs">Medium (default)</h4>
            <RangeSlider min={0} max={100} defaultValue={50} size="medium" />
        </div>
        <div>
            <h4 className="mb-xs">Large</h4>
            <RangeSlider min={0} max={100} defaultValue={70} size="large" />
        </div>
    </div>
)
SizeVariants.parameters = {
    docs: {
        description: {
            story: 'RangeSlider comes in three sizes: small, medium (default), and large.'
        }
    }
}

// Color Variants
export const ColorVariants = () => (
    <div className="d-flex flex-column gap-lg">
        <RangeSlider variant="primary" defaultValue={50} />
        <RangeSlider variant="secondary" defaultValue={60} />
        <RangeSlider variant="tertiary" defaultValue={70} />
        <RangeSlider variant="success" defaultValue={80} />
        <RangeSlider variant="danger" defaultValue={30} />
        <RangeSlider variant="warning" defaultValue={40} />
        <RangeSlider variant="info" defaultValue={90} />
    </div>
)
ColorVariants.parameters = {
    docs: {
        description: {
            story: 'RangeSlider supports different color themes to match your UI requirements.'
        }
    }
}

// Controlled Component
export const Controlled = () => {
    const [value, setValue] = useState(25)

    return (
        <div className="d-flex flex-column gap-md">
            <RangeSlider
                min={0}
                max={100}
                value={value}
                onChange={(newValue) => setValue(newValue)}
            />

            <div className="mt-md">
                <p>Current value: {value}</p>
                <div className="d-flex gap-sm mt-sm">
                    <button
                        className="button button--sm"
                        onClick={() => setValue(Math.max(0, value - 10))}
                    >
                        -10
                    </button>
                    <button
                        className="button button--sm"
                        onClick={() => setValue(Math.min(100, value + 10))}
                    >
                        +10
                    </button>
                    <button className="button button--sm" onClick={() => setValue(0)}>
                        Reset
                    </button>
                </div>
            </div>
        </div>
    )
}
Controlled.parameters = {
    docs: {
        description: {
            story: 'Example of controlling the slider value through state management.'
        }
    }
}

// Custom Value Formatting
export const FormattedValue = Template.bind({})
FormattedValue.args = {
    min: 0,
    max: 1000,
    step: 50,
    defaultValue: 500,
    formatValue: (value) => `$${value.toLocaleString()}`
}
FormattedValue.parameters = {
    docs: {
        description: {
            story: 'Custom formatting of the displayed value using the formatValue prop.'
        }
    }
}

// Custom Min/Max Labels
export const CustomLabels = Template.bind({})
CustomLabels.args = {
    min: 0,
    max: 10,
    step: 0.1,
    defaultValue: 7.5,
    labelMin: 'Beginner',
    labelMax: 'Expert'
}
CustomLabels.parameters = {
    docs: {
        description: {
            story: 'Custom labels for the minimum and maximum values.'
        }
    }
}

// Disabled State
export const Disabled = Template.bind({})
Disabled.args = {
    min: 0,
    max: 100,
    defaultValue: 50,
    disabled: true
}
Disabled.parameters = {
    docs: {
        description: {
            story: 'Disabled state of the range slider.'
        }
    }
}

// No Labels or Value
export const NoLabelsOrValue = Template.bind({})
NoLabelsOrValue.args = {
    min: 0,
    max: 100,
    defaultValue: 50,
    showLabels: false,
    showValue: false
}
NoLabelsOrValue.parameters = {
    docs: {
        description: {
            story: 'Range slider without labels or value display, for a minimal look.'
        }
    }
}

// Advanced Examples
export const PriceRangeFilter = () => {
    const [minPrice, setMinPrice] = useState(200)
    const [maxPrice, setMaxPrice] = useState(800)

    const handleMinChange = (value) => {
        setMinPrice(Math.min(value, maxPrice - 50))
    }

    const handleMaxChange = (value) => {
        setMaxPrice(Math.max(value, minPrice + 50))
    }

    return (
        <div className="card p-lg" style={{maxWidth: '600px'}}>
            <h3 className="mb-md">Price Range Filter</h3>

            <div className="d-flex flex-column gap-md">
                <div>
                    <label className="form__label">Minimum Price</label>
                    <RangeSlider
                        min={0}
                        max={1000}
                        step={10}
                        value={minPrice}
                        onChange={handleMinChange}
                        variant="primary"
                        formatValue={(v) => `$${v}`}
                    />
                </div>

                <div>
                    <label className="form__label">Maximum Price</label>
                    <RangeSlider
                        min={0}
                        max={1000}
                        step={10}
                        value={maxPrice}
                        onChange={handleMaxChange}
                        variant="primary"
                        formatValue={(v) => `$${v}`}
                    />
                </div>

                <div className="d-flex justify-content-between p-md bg-light-gray rounded-md">
                    <div>
                        <strong>Min:</strong> ${minPrice}
                    </div>
                    <div>
                        <strong>Max:</strong> ${maxPrice}
                    </div>
                </div>

                <button className="button button--primary">Apply Filter</button>
            </div>
        </div>
    )
}
PriceRangeFilter.parameters = {
    docs: {
        description: {
            story: 'Advanced example of a price range filter with two connected sliders.'
        }
    }
}

// Rating System
export const RatingSystem = () => {
    const [rating, setRating] = useState(3.5)

    const formatRating = (value) => {
        return `${value.toFixed(1)} ★`
    }

    return (
        <div className="card p-lg" style={{maxWidth: '400px'}}>
            <h3 className="mb-sm">Product Rating</h3>
            <p className="text-dark-gray mb-md">Drag to select your rating</p>

            <RangeSlider
                min={0}
                max={5}
                step={0.5}
                value={rating}
                onChange={setRating}
                variant="warning"
                formatValue={formatRating}
                labelMin="Poor"
                labelMax="Excellent"
            />

            <div className="mt-lg text-center">
                <p className="text-lg font-weight-bold mb-xs">
                    {rating === 5
                        ? 'Perfect!'
                        : rating >= 4
                        ? 'Excellent!'
                        : rating >= 3
                        ? 'Good'
                        : rating >= 2
                        ? 'Okay'
                        : rating >= 1
                        ? 'Poor'
                        : 'Very Poor'}
                </p>
                <p className="text-sm">Your rating: {formatRating(rating)}</p>
            </div>
        </div>
    )
}
RatingSystem.parameters = {
    docs: {
        description: {
            story: 'Example of using the RangeSlider as a rating input.'
        }
    }
}
