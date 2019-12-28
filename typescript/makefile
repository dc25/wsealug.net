SOURCES=getEvent.ts 
BUILD_DIR=js
ASSETS_DIR=../assets/js
JS=$(SOURCES:.ts=.js)
JS_BUILD=$(addprefix $(BUILD_DIR)/,$(JS))
JS_ASSETS=$(addprefix $(ASSETS_DIR)/,$(JS))

default: $(JS_ASSETS)

$(BUILD_DIR)/%.js: %.ts
	tsc
        
$(ASSETS_DIR)/%.js: $(BUILD_DIR)/%.js
	browserify -e $< -o $@
        

