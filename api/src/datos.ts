interface RootObject {
    results: Result[];
    offset: number;
    number: number;
    totalResults: number;
  }
  
  interface Result {
    vegetarian: boolean;
    vegan: boolean;
    glutenFree: boolean;
    dairyFree: boolean;
    veryHealthy: boolean;
    cheap: boolean;
    veryPopular: boolean;
    sustainable: boolean;
    lowFodmap: boolean;
    weightWatcherSmartPoints: number;
    gaps: string;
    preparationMinutes: number;
    cookingMinutes: number;
    aggregateLikes: number;
    healthScore: number;
    creditsText: string;
    license?: string;
    sourceName: string;
    pricePerServing: number;
    id: number;
    title: string;
    readyInMinutes: number;
    servings: number;
    sourceUrl: string;
    image: string;
    imageType: string;
    summary: string;
    cuisines: string[];
    dishTypes: string[];
    diets: string[];
    occasions: string[];
    analyzedInstructions: (AnalyzedInstruction | AnalyzedInstructions2 | AnalyzedInstructions3 | AnalyzedInstructions4 | AnalyzedInstructions5 | AnalyzedInstructions6 | AnalyzedInstructions7 | AnalyzedInstructions8 | AnalyzedInstructions9 | AnalyzedInstructions10 | AnalyzedInstructions11 | AnalyzedInstructions12 | AnalyzedInstructions13 | AnalyzedInstructions14 | AnalyzedInstructions15 | AnalyzedInstructions16 | AnalyzedInstructions17 | AnalyzedInstructions18 | AnalyzedInstructions19 | AnalyzedInstructions20)[];
    spoonacularSourceUrl: string;
    author?: string;
  }
  
  interface AnalyzedInstructions20 {
    name: string;
    steps: Step19[];
  }
  
  interface Step19 {
    number: number;
    step: string;
    ingredients: any[];
    equipment: Ingredient[];
  }
  
  interface AnalyzedInstructions19 {
    name: string;
    steps: Step18[];
  }
  
  interface Step18 {
    number: number;
    step: string;
    ingredients: Ingredient[];
    equipment: any[];
    length: Length;
  }
  
  interface AnalyzedInstructions18 {
    name: string;
    steps: Step17[];
  }
  
  interface Step17 {
    number: number;
    step: string;
    ingredients: (Ingredient | Ingredient)[];
    equipment: Ingredient[];
    length?: Length;
  }
  
  interface AnalyzedInstructions17 {
    name: string;
    steps: Step16[];
  }
  
  interface Step16 {
    number: number;
    step: string;
    ingredients: Ingredient[];
    equipment: any[];
    length?: Length;
  }
  
  interface AnalyzedInstructions16 {
    name: string;
    steps: Step15[];
  }
  
  interface Step15 {
    number: number;
    step: string;
    ingredients: Ingredient[][];
    equipment: Ingredient[][];
  }
  
  interface AnalyzedInstructions15 {
    name: string;
    steps: Step14[];
  }
  
  interface Step14 {
    number: number;
    step: string;
    ingredients: Ingredient[];
    equipment: (Equipment | Ingredient | Equipment2)[];
    length?: Length;
  }
  
  interface AnalyzedInstructions14 {
    name: string;
    steps: Step13[];
  }
  
  interface Step13 {
    number: number;
    step: string;
    ingredients: Ingredient[];
    equipment: any[];
    length?: Length;
  }
  
  interface AnalyzedInstructions13 {
    name: string;
    steps: Step12[];
  }
  
  interface Step12 {
    number: number;
    step: string;
    ingredients: Ingredient[];
    equipment: Ingredient[];
    length?: Length;
  }
  
  interface AnalyzedInstructions12 {
    name: string;
    steps: Step11[];
  }
  
  interface Step11 {
    number: number;
    step: string;
    ingredients: Ingredient[];
    equipment: Equipment2[];
    length?: Length;
  }
  
  interface AnalyzedInstructions11 {
    name: string;
    steps: Step10[];
  }
  
  interface Step10 {
    number: number;
    step: string;
    ingredients: Ingredient[];
    equipment: (Ingredient | Equipment2)[];
    length?: Length;
  }
  
  interface AnalyzedInstructions10 {
    name: string;
    steps: Step5[];
  }
  
  interface AnalyzedInstructions9 {
    name: string;
    steps: Step9[];
  }
  
  interface Step9 {
    number: number;
    step: string;
    ingredients: Ingredient[];
    equipment: any[];
  }
  
  interface AnalyzedInstructions8 {
    name: string;
    steps: Step8[];
  }
  
  interface Step8 {
    number: number;
    step: string;
    ingredients: Ingredient[];
    equipment: (Equipment | Ingredient)[];
    length?: Length;
  }
  
  interface Equipment {
    id: number;
    name: string;
    localizedName: string;
    image: string;
    temperature?: Length;
  }
  
  interface AnalyzedInstructions7 {
    name: string;
    steps: Step7[];
  }
  
  interface Step7 {
    number: number;
    step: string;
    ingredients: Ingredient[];
    equipment: (Ingredient | Equipment2)[];
    length?: Length;
  }
  
  interface Equipment2 {
    id: number;
    name: string;
    localizedName: string;
    image: string;
    temperature: Length;
  }
  
  interface AnalyzedInstructions6 {
    name: string;
    steps: Step6[];
  }
  
  interface Step6 {
    number: number;
    step: string;
    ingredients: Ingredient[];
    equipment: Ingredient[];
  }
  
  interface AnalyzedInstructions5 {
    name: string;
    steps: Step5[];
  }
  
  interface Step5 {
    number: number;
    step: string;
    ingredients: Ingredient[];
    equipment: Ingredient[];
    length: Length;
  }
  
  interface AnalyzedInstructions4 {
    name: string;
    steps: Step4[];
  }
  
  interface Step4 {
    number: number;
    step: string;
    ingredients: Ingredient[];
    equipment: Ingredient[];
    length?: Length;
  }
  
  interface AnalyzedInstructions3 {
    name: string;
    steps: Step3[];
  }
  
  interface Step3 {
    number: number;
    step: string;
    ingredients: Ingredient[];
    equipment: Ingredient[];
    length?: Length;
  }
  
  interface Length {
    number: number;
    unit: string;
  }
  
  interface AnalyzedInstructions2 {
    name: string;
    steps: Step2[];
  }
  
  interface Step2 {
    number: number;
    step: string;
    ingredients: Ingredient[];
    equipment: Ingredient[];
  }
  
  interface AnalyzedInstruction {
    name: string;
    steps: Step[];
  }
  
  interface Step {
    number: number;
    step: string;
    ingredients: (Ingredient | Ingredient)[];
    equipment: Ingredient[];
  }
  
  interface Ingredient {
    id: number;
    name: string;
    localizedName: string;
    image: string;
  }