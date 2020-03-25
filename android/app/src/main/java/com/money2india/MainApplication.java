package com.money2india;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.rumax.reactnative.pdfviewer.PDFViewPackage;
import com.reactnativecommunity.asyncstorage.AsyncStoragePackage;
import com.christopherdro.RNPrint.RNPrintPackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.christopherdro.htmltopdf.RNHTMLtoPDFPackage;
import io.github.elyx0.reactnativedocumentpicker.DocumentPickerPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new PDFViewPackage(),
            new AsyncStoragePackage(),
            new LinearGradientPackage(),
            new RNPrintPackage(),
            new LinearGradientPackage(),
            new RNHTMLtoPDFPackage(),
            new DocumentPickerPackage(),
            new VectorIconsPackage(),
            new RNGestureHandlerPackage()
        
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
