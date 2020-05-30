Pod::Spec.new do |spec|
  spec.name             = "RNMix"
  spec.version          = "2.0.0"
  spec.summary          = "Mix"
  spec.description      = "User input masking library."
  spec.homepage         = "https://github.com/allysonfield/react-native-mix"
  spec.license          = "MIT"
  spec.author           = { "Allyson Monteiro" => "allysonfield2@gmail.com" }
  spec.source           = { :git => "https://github.com/allysonfield/react-native-mix", :tag => spec.version.to_s }
  spec.platform         = :ios, "8.0"
  spec.requires_arc     = true
  spec.source_files     = "Mix/Classes/**/*"
  spec.swift_version    = "5.0"
end
