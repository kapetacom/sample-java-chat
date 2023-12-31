/**
 * GENERATED SOURCE - DO NOT EDIT
 */
package com.kapeta.sample;

import com.kapeta.spring.annotation.KapetaEnableMongoDB;
import com.kapeta.spring.annotation.KapetaEnableRestResource;
import com.kapeta.spring.annotation.KapetaSpringApplication;
import java.lang.annotation.*;

@Target({ ElementType.TYPE })
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Inherited
@KapetaSpringApplication
@KapetaEnableRestResource
@KapetaEnableMongoDB
public @interface EnableKapeta {
}
